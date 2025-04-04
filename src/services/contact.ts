export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function submitContactForm(_data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    // TODO: Implement actual form submission logic (e.g., sending email, storing in database)
    // For now, we'll simulate a successful submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      message: "Sorry, there was an error sending your message. Please try again later.",
    };
  }
}
