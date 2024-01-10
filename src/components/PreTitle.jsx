
const PreTitle = ({name}) => {
  return (
    <div className="flex gap-x-3 items-center justify-center w-fit ">
        <div className="w-[3.5rem] h-[0.2rem] bg-primary mt-2" />
        <h4 className="preTitle">
            {name}
        </h4>
    </div>
  )
}

export default PreTitle