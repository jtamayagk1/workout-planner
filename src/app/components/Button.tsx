

export default function Button(props: any){
  return(
    <button type="button" className={`p-2 m-1 w-24 ${props.color}`} onClick={props.onClick}>{props.content}</button>
  );
}