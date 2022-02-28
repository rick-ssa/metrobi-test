import './Content.css'

const Content = ({color, title, text, textPaddingTop}) => {

    return (
        <div className='content' style={{background:color}}>
            <h2 className="content__title">
                {title}
            </h2>

            <div 
                className="content__text"
                style={{paddingTop:textPaddingTop}}
            >
                {text}
            </div>
        </div>
    )
}

export default Content