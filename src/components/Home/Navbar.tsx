import React, {FC} from "react";


interface NavbarProps  {

    options: string[];

}

const Navbar: FC<NavbarProps> = ({options}) => {

    let navbar_options = options.map( (label, i) => {
        return (
            <button>
                <h1 className="text-3xl m-auto whitespace-nowrap mx-10 text-center text-white font-bold">
                    - {label} -
                </h1>
            </button>
        );
    });

    return(
        <div className={`w-full h-full grid grid-cols-1 lg:grid-cols-4 content-center text-center`}>
            {navbar_options}
        </div>
    );
}

export default Navbar;