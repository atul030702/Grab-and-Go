export const Shimmer = () => {
    return (
        <div className="shimmer flicker w-[285px] h-[300px] flex flex-col justify-center items-center
            bg-gray-200 p-2.5 rounded-xl gap-1"
        >
            <div className="flicker w-full h-[185] rounded-xl bg-gray-50"></div>
            <h3 className="flicker w-full h-[35px] bg-gray-100"></h3>
            <div className="flicker w-full h-[35px] bg-gray-100"></div>
            <div className="flicker w-full h-[25px] bg-gray-100"></div>
        </div>
    );
};

