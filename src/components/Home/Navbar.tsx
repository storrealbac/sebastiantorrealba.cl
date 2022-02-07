import React, {FC} from "react";

interface NavbarProps  {

    options: string[];

}

const Navbar: FC<NavbarProps> = ({options}) => {

    let navbar_options = options.map( (label) => {
        return (
            <button>
                <h1 className="text-3xl text-white font-bold m-auto">- {label} -</h1>
            </button>
        );
    });

    return(
        <div className={`w-full grid grid-cols-1 xl:grid-cols-${options.length} text-center`}>
            {navbar_options}
        </div>
    );
}

export default Navbar;