export function TextFiled({label, type, ...props}){ //...props : 여러개의 input



  return(
    <div>
      <label>{label}
        <input type={type} {...props}/>
      </label>
    </div>
  )
}