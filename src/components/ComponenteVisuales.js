import react , {Component} from 'react';

class ComponenteVisuales  extends Component {

    render(){
        return (
            <li><a href="#">{this.props.valor}</a></li>
        );
    }
}

export default ComponenteVisuales;