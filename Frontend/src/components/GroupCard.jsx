export default function GroupCard({ groupName, members }) {
    return (

        <div className="bg-white m-10 p-6 rounded-xl shadow-md w-50 h-60 hover:scale-103 transition cursor-pointer">

            <h2 className="text-xl font-bold">
                {groupName}
            </h2>

            <p className="text-gray-600 mt-2">
                Members: {members}
            </p>

        </div>
    );
}