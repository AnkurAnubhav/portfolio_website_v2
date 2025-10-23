// Contact form service for handling API calls

const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://ankuranubhav.netlify.app/.netlify/functions'  // Update with your Netlify URL
  : 'http://localhost:8888/.netlify/functions';  // Local development with Netlify CLI

/**
 * Submit contact form data to the backend
 * @param {Object} formData - The contact form data
 * @param {string} formData.name - User's name
 * @param {string} formData.email - User's email
 * @param {string} formData.message - User's message
 * @returns {Promise<Object>} Response from the server
 */
export const submitContactForm = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || data.message || 'Failed to send message');
    }

    return {
      success: true,
      message: data.message || 'Message sent successfully!'
    };

  } catch (error) {
    console.error('Contact form submission error:', error);
    
    // Return a user-friendly error message
    return {
      success: false,
      error: error.message || 'Failed to send message. Please try again later.'
    };
  }
};

/**
 * Fallback method using mailto link for when backend is not available
 * @param {Object} formData - The contact form data
 * @returns {void}
 */
export const fallbackToEmail = (formData) => {
  const { name, email, message } = formData;
  const subject = encodeURIComponent(`Contact from ${name}`);
  const body = encodeURIComponent(`
Name: ${name}
Email: ${email}

Message:
${message}
  `);
  
  const mailtoLink = `mailto:ankuranubhav1994@gmail.com?subject=${subject}&body=${body}`;
  window.open(mailtoLink, '_blank');
};

/**
 * Submit contact form with fallback to email
 * @param {Object} formData - The contact form data
 * @returns {Promise<Object>} Response object
 */
export const submitContactFormWithFallback = async (formData) => {
  try {
    // Try to submit via API first
    const result = await submitContactForm(formData);
    
    if (result.success) {
      return result;
    } else {
      // If API fails, offer fallback
      return {
        success: false,
        error: result.error,
        fallbackAvailable: true
      };
    }
  } catch (error) {
    // If there's a network error or API is unavailable, offer fallback
    return {
      success: false,
      error: 'Unable to send message through our contact form. Would you like to send an email directly?',
      fallbackAvailable: true
    };
  }
};
