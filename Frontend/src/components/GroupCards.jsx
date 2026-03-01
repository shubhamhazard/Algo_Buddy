import GroupCard from "./GroupCard";

export default function GroupCards() {
    const groups = [
        { id: 1, name: "DSA Beginners", members: 5 },
        { id: 2, name: "LeetCode 150", members: 7 },
        { id: 3, name: "Graph Theory", members: 4 },
        { id: 4, name: "Striver's DSA Sheet", members: 5 },
        { id: 5, name: "LeetCode 150", members: 7 },
        { id: 6, name: "Striver's DSA Sheet", members: 4 },
        { id: 7, name: "DSA Beginners", members: 5 },
        { id: 8, name: "Striver's DSA Sheet", members: 7 },
        { id: 9, name: "Graph Theory", members: 4 },
        { id: 10, name: "DSA Beginners", members: 5 },
        { id: 11, name: "Dynamic Programming", members: 7 },
        { id: 12, name: "Graph Theory", members: 4 },
        { id: 13, name: "DSA Beginners", members: 5 },
        { id: 14, name: "LeetCode 150", members: 7 },
        { id: 15, name: "Babbar's DSA sheet", members: 4 },
    ];
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
                {groups.map(group => (
                    <GroupCard
                        groupName={group.name}
                        members={group.members}
                    />
                ))}
            </div>
            
            
        </>
    )
}
