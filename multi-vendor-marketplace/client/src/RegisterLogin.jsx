import React, { useState } from 'react';

const API_URL = import.meta.env.VITE_USER_SERVICE_URL || 'http://localhost:5001/api/users';

export default function RegisterLogin({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'buyer' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const endpoint = isLogin ? '/login' : '/register';
      const body = isLogin ? { email: form.email, password: form.password } : form;
      const res = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(isLogin ? 'Login successful!' : 'Registration successful!');
        if (isLogin) {
          localStorage.setItem('token', data.token);
          if (onLogin) onLogin();
        }
      } else {
        setMessage(data.message || 'Error');
      }
    } catch (err) {
      setMessage('Server error');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', padding: 24, border: '1px solid #eee', borderRadius: 8 }}>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <div>
              <label>Name</label>
              <input name="name" value={form.name} onChange={handleChange} required style={{ width: '100%' }} />
            </div>
            <div>
              <label>Role</label>
              <select name="role" value={form.role} onChange={handleChange} style={{ width: '100%' }}>
                <option value="buyer">Buyer</option>
                <option value="vendor">Vendor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </>
        )}
        <div>
          <label>Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required style={{ width: '100%' }} />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" value={form.password} onChange={handleChange} required style={{ width: '100%' }} />
        </div>
        <button type="submit" style={{ marginTop: 16, width: '100%' }}>
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      <button onClick={() => { setIsLogin(!isLogin); setMessage(''); }} style={{ marginTop: 8, width: '100%' }}>
        {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
      </button>
      {message && <div style={{ marginTop: 16, color: message.includes('success') ? 'green' : 'red' }}>{message}</div>}
    </div>
  );
}
