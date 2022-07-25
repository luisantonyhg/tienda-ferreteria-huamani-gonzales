import  {useState , useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const ItemCount = ({inicial,stock}) => {

    const [count , setCount] = useState(parseInt(inicial));

    const descontando = () => {
        setCount(count - 1);
    }

    const aumentando = () => {
        setCount(count + 1 )
    }

    useEffect (() => {
        setCount(parseInt(inicial))
      
    },[inicial])

    const agregar = (cuanto) => {
        console.log(`AGREGASTE AL CARRITO ${cuanto} unidades`);
        
        
      
    }

    



    return (
        <div className="container-fluid">

     
            <Card style={{ width: '13rem',heigth: '15rem' }} >
                <Card.Body>
                <Card.Title>MI CARRITO</Card.Title>
                <Card.Text>
                hasta el momento {count}
                
                </Card.Text>

               

                <div className="row">
                    <div className="col-4">
                    <Button variant="primary" disabled={count <= 1} onClick={ descontando}>-</Button>
                    </div>
                    <div className="col-4">
                    <Button variant="primary" disabled={count >= stock} onClick={aumentando}>+</Button> 
                    </div>
                </div>
            
                

                <br/>
                <br/>
            
                <div className="col-12">
                <Button variant="outline-success" disabled={stock <=0} onClick={() => agregar(count)}>AGREGAR AL CARRITO</Button>
                <h6>* AL MOMENTO DE AGREGAR AL CARRITO APARECERA EN INSPECCIONAR LA TOTALIDAD</h6>
                </div>
              
                </Card.Body>
        
            </Card>
        </div>
    );
}

export default ItemCount;

