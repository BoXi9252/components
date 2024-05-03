import Button from './Button';

function Banner(props) {
  return (
    <div className="content">
      <h1>{props.name}</h1>
      <p>{props.des}</p>
      <div className="buttonGroup"> 
        <Button type="normal" name="PORTFOLIO"/>
        <Button type="primary" name="CONTACT ME" style="margin-left:30px"/>
      </div>
    </div>
  );
}

export default Banner;
