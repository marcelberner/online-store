import "./SectionHeader.scss";

const SectionHeader = (props) => {
  return (
    <h2 className="section-header">{props.text}</h2>
  )
}

export default SectionHeader