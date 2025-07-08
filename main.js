document.getElementById('placement-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    phone: e.target.phone.value,
    message: e.target.message.value
  };

  try {
    const res = await fetch('https://your-backend-url.com/send-message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const data = await res.json();
    document.getElementById('status').innerText = data.message || 'Sent successfully!';
  } catch (err) {
    document.getElementById('status').innerText = '❌ Failed to send message';
  }
});