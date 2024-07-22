import React, { useContext } from 'react'
import { ThemeContext } from '../context/ContextProvider'

const ThemeApp = () => {
    const {theme}=useContext(ThemeContext);
  return (
    <div style={{color:theme=="light" ? 'black' : "white",backgroundColor:theme=="light" ? 'white' : 'black',height:'90vh',textAlign:"center",padding:"8px",transition:"all 0.5s ease-in-out"}}>
        <h1>Theme is {theme}</h1>
        <p>This is a theme-aware React app using Styled Components.</p>
        <p>Switch between light and dark themes by clicking the button. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit deserunt aspernatur voluptates fugiat perferendis consequuntur aperiam debitis quidem, veritatis maxime at maiores temporibus, eum dolor in eaque doloremque obcaecati! Quas tenetur, iusto quae incidunt provident ullam possimus doloribus voluptatibus earum sit dolorum omnis facilis at ab, nulla debitis asperiores consequatur excepturi totam, perspiciatis harum reprehenderit repellat! Modi qui ratione quas exercitationem molestias mollitia quae repellendus quibusdam vel, soluta aperiam dolor beatae dolores quod repellat earum saepe, autem sed fugiat! Illo eum quod, cum repudiandae asperiores maiores hic vitae mollitia, ullam vero obcaecati consequatur possimus quo! Recusandae fuga cumque esse deleniti nemo enim, quia accusamus ab. Eum nulla itaque doloremque qui numquam, dignissimos vero quas, cupiditate dolorum consectetur dicta. Soluta, qui non voluptatibus nulla quae ipsum expedita facere necessitatibus dignissimos fugit assumenda illo sint quaerat, illum unde? Id est blanditiis placeat! Pariatur numquam voluptatum praesentium voluptatibus adipisci quae expedita, modi quaerat?</p>
      <div></div>
    </div>
  )
}

export default ThemeApp 