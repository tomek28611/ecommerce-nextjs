import { useState } from 'react';
import Header from '@/components/Header';
import { useRouter } from 'next/router'; 
import styles from '@/styles/Podpora.module.css';

export default function Podpora() {
  const router = useRouter(); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [title, setTitle] = useState('');
  const [titleNr, setTitleNr] = useState('');
  const [vin, setVin] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    const requestData = {
      name,
      email,
      phone,
      title,
      titleNr,
      vin,
      message,
    };

    try {
      const response = await fetch('/api/support', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setName('');
        setEmail('');
        setPhone('');
        setTitle('');
        setTitleNr('');
        setVin('');
        setMessage('');
        router.push('/?message=success'); 
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Dotaz na autodíl</h1>
        {success && <p className={styles.success}>Zpráva byla odeslána!</p>}
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" placeholder="Jméno*" value={name} onChange={(e) => setName(e.target.value)} className={styles.input} required />
          <input type="email" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input} required />
          <input type="tel" placeholder="Telefon" value={phone} onChange={(e) => setPhone(e.target.value)} className={styles.input}  />
          <input type="text" placeholder="Název dílu*" value={title} onChange={(e) => setTitle(e.target.value)} className={styles.input} required />
          <input type="text" placeholder="Číslo dílu" value={titleNr} onChange={(e) => setTitleNr(e.target.value)} className={styles.input}  />
          <input type="text" placeholder="VIN" value={vin} onChange={(e) => setVin(e.target.value)} className={styles.input}  />
          <textarea placeholder="Zpráva" value={message} onChange={(e) => setMessage(e.target.value)} className={styles.textarea}  />
          <button type="submit" disabled={loading} className={styles.button}>
            {loading ? 'Odesílání...' : 'Poslat'}
          </button>
        </form>
      </div>
    </div>
  );
}
