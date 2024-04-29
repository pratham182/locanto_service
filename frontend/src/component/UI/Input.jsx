import Select from 'react-select'

const Input=({value, type, onChange,className, placeholder, name,onClick})=>{
    
const options = [
   
 ]
     return(
      type=="dropdown" ?( <Select className={className} options={options} />):
        
        (<input  value={value} onClick={onClick} placeholder={placeholder} className={className} onChange={onChange}/>)
     )
}

export default Input;