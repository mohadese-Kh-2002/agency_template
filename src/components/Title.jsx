const Title = ({title,subtitle,description}) => {
  return (

           <div>
          <span className="text-(--primary) font-medium">{subtitle}</span>
          <h3 className="text-[20px] sm:text-[30px] font-bold mt-2">
            {title}
          </h3>
          {description && <p className="text-(--text-muted) mt-3">
           {description}
          </p> }
          
        </div>
 
  )
}

export default Title