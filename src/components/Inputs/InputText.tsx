
type inputTextProps = {
    placeholder:string,
    id:string

}

export const InputText = ({placeholder, id} : inputTextProps) => {

    return(
        <input type="text" id={id} className="w-96 px-4 py-1 text-base rounded-lg border focus:outline focus:outline-0 focus:outline-offset-2 bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-[#cbcbcb]" placeholder={placeholder}/>
    )
}