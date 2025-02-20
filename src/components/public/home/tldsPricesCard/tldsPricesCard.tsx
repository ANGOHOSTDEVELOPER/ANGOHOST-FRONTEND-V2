import React from "react";

interface IProps {
  children: React.ReactNode
}

export default function TldsPricesCard({children}: IProps) {
    return (
        <>
            <div className="text-white grid grid-flow-col-dense absolute p-2 gap-x-2 bottom-[-70px] bg-primary rounded-[24px] w-max">
            {children}
          </div>
        </>
    )
}


