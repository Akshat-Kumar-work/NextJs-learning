

export default function DashboardLayout({children,user,revenue,notifications}){
    return(

        <div>
              <div className="flex"> complex dashboard <div>{children}</div> </div>  
              <div className="flex  flex-col">
                    <div>{user}</div>
                    <div>{revenue}</div>
              </div>
              <div className="flex">{notifications}</div>
        </div>
    )
}