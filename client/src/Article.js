import Section from "./Section"


const Article = ({section}) => {

    // console.log(section)


    return (
        <>
        {section &&
        <div>{section.section.map((title) => {
            console.log(title)
            return <Section key={title} title={title}/>
        })}</div>
    }
    </>
    )
}

export default Article ; 