import React, {useState} from "react";

class Test extends React.Component {

    state = {
        currentValue: 0
    };
    render(): React.ReactNode {
        return <div onClick={this.changeState}>{this.state.currentValue}</div>;
    }

    changeState() {
        this.setState({currentValue: 10});
    }

}


const TestFunctional: React.FC = () => {
    const [currentValue, setCurrentValue] = useState(0);
    return <div onClick={() => setCurrentValue(10)}>{currentValue}</div>
}