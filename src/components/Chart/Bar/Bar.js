import './Bar.css';

const Bar = props => {
    let barFillHeight = '0%';

    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return <div className="bar">
        <div className="bar__inner">
            <div className="bar__fill" style={{ height: barFillHeight }}></div>
        </div>
        <div className="bar__label"></div>
    </div>
}

export default Bar;