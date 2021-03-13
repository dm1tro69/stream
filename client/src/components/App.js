import {BrowserRouter, Route} from 'react-router-dom'
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

function App() {
  return (
    <div className="ui container">
     <BrowserRouter>
         <div>
             <Header/>
             <Route exact path='/' component={StreamList}/>
             <Route  path='/streams/new' component={StreamCreate}/>
             <Route  path='/streams/edit' component={StreamEdit}/>
             <Route  path='/streams/delete' component={StreamDelete}/>
             <Route  path='/streams/show' component={StreamShow}/>

         </div>
     </BrowserRouter>
    </div>
  );
}

export default App;