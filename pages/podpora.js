import { useState } from 'react';
import Header from '@/components/Header';
import { useRouter } from 'next/router';
import styles from '@/styles/Podpora.module.css';
import Head from "next/head";

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
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Auto Dily Express | Zeptejte se nás, zda máme náhradní díl, který potřebujete</title>
        <meta
          name="description"
          content="Objevte širokou nabídku kvalitních autodílů pro vozy Mercedes. Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka, skvělé ceny a spolehlivý servis. Vaše auto si zaslouží to nejlepší!"
        />

        <link rel="cannonical" href="https://autodilyexpress.cz/podpora" />
        <link rel="apple-touch-icon" sizes="180x180" href="/auto-dily-logo.png" />
        <meta property="og:locale" content="cs_CZ" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka" />
        <meta property="og:image" content="/auto-dily-logo.png" />
        <meta property="og:image:width" content="50" />
        <meta property="og:image:height" content="50" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:description" content="Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka" />
        <meta property="og:url" content="https://autodilyexpress.cz" />
        <meta property="og:site_name" content="autodilyexpress.cz" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka" />
        <meta name="twitter:description" content="Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka"></meta>

      </Head>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Dotaz na autodíl</h1>
        <div className={styles.title}>
          <p>Pokud se chcete zeptat na autodíl, můžete zavolat:</p>
          <p><strong>728 445 566</strong> nebo<strong> 606 400 968</strong></p>
          <p>nebo </p>
          <p>vyplňte formulář, odpovíme vám co nejdříve</p>
        </div>
        {success && <p className={styles.success}>Zpráva byla odeslána!</p>}
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" placeholder="Jméno*" value={name} onChange={(e) => setName(e.target.value)} className={styles.input} required />
          <input type="email" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input} required />
          <input type="tel" placeholder="Telefon" value={phone} onChange={(e) => setPhone(e.target.value)} className={styles.input} />
          <input type="text" placeholder="Název dílu*" value={title} onChange={(e) => setTitle(e.target.value)} className={styles.input} required />
          <input type="text" placeholder="Číslo dílu" value={titleNr} onChange={(e) => setTitleNr(e.target.value)} className={styles.input} />
          <input type="text" placeholder="VIN" value={vin} onChange={(e) => setVin(e.target.value)} className={styles.input} />
          <textarea placeholder="Zpráva" value={message} onChange={(e) => setMessage(e.target.value)} className={styles.textarea} />
          <button type="submit" disabled={loading} className={styles.button}>
            {loading ? 'Odesílání...' : 'Poslat'}
          </button>
        </form>
      </div>
    </div>
  );
}
