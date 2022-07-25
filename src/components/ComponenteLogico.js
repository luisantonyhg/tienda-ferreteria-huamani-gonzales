import react , {Component} from 'react';
import ComponenteFuncional from './ComponenteFuncional';



class ComponenteLogico  extends Component {

constructor(props) {
    super(props);
    this.state = {
        temas : ['javascript','vue','react']
    };
}

render() {
    const items = this.state.temas.map(t => {
        <ComponenteFuncional valor={t}/>
    });
    return (
        <div>
            <p>Componente Logico Soy</p>
        </div>
    );
}

}

export default ComponenteLogico;