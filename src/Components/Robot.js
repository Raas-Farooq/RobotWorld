import 'tachyons';


function Robot( { name, email, id }){
   
    return(
        
        <div className="bg-light-green dib pa3 ma1 br2 grow bw2 shadow-5 tc">
            <img src={`https://robohash.org/${id}`} width="150" height="150" alt="Robot"></img>
        <div><h3>{name}</h3>
        <p>{email}</p>
        </div>
        </div>
       
    );
} 
export default Robot;