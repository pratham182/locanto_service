import Select from 'react-select'

const Input=({value, type, onChange,className, placeholder, name,onClick,style})=>{
    
const options = [
   { value: 'chocolate', label: 'Chocolate' },
   { value: 'strawberry', label: 'Strawberry' },
   { value: 'vanilla', label: 'Vanilla' }
 ]
     return(
      type=="dropdown" ?( <Select className={className} options={options} />):
        
        (<input value={value} onClick={onClick} placeholder={placeholder} style={style}/>)
     )
}

export default Input;