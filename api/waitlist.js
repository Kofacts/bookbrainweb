// api/waitlist.js
import { createClient } from 'redis';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email } = req.body;
    
    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide a valid email address' 
      });
    }
    
    // Connect to Redis
    const client = createClient({
      url: process.env.REDIS_URL,
      password: process.env.REDIS_PASSWORD
    });
    
    await client.connect();
    
    // Check if email already exists
    const emailExists = await client.sIsMember('waitlist_emails', email);
    if (emailExists) {
      await client.disconnect();
      return res.status(200).json({
        success: true,
        message: 'You\'re already on our waitlist!'
      });
    }
    
    // Add email to set
    await client.sAdd('waitlist_emails', email);
    
    // Store additional details like signup timestamp
    await client.hSet(`waitlist:${email}`, {
      email,
      signupDate: new Date().toISOString()
    });
    
    await client.disconnect();
    
    return res.status(200).json({ 
      success: true, 
      message: 'Thank you for joining our waitlist!' 
    });
  } catch (error) {
    console.error('Waitlist error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Something went wrong. Please try again later.' 
    });
  }
}