import React, { useState, useEffect } from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';

const tg =window.Telegram.WebApp
function App() {
  const { t } = useTranslation()
  const [postId, setPostId] = useState(null);

  useEffect(() => {
      
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ "sign": "leo",
    "language": "translated",
    "period": "today" })
      };
      fetch('https://poker247tech.ru/get_horoscope/', requestOptions)
          .then(response => response.json())
          .then(data => setPostId(data.horoscope));
          
        }, []);
        console.log(postId);



  
  useEffect(()=>{
    tg.ready()
  },[])

  const onClose = ()=>{
    tg.close()
  }

  return (
    <div className="App">
    {postId}
    <p>{t('language')}</p>
     <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;

