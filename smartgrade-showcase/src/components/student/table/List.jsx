import studentdata from "./../../../../src/assets/data.json"

function Row({ userid, img, name, scores, percentage }) {
    return (
        <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">{userid}</td><td className="p-5 text-sm md:text-xl">
                <div className="flex space-x-3 items-center">
                    <img className="w-8 h-8" src={img} width="32" height="32" alt="John Smith" />
                    <span className="whitespace-nowrap">{name}</span>
                </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">{scores}</td>
            <td className="p-5 text-sm md:text-xl text-center">{percentage}</td>
        </tr>
    );
}


export default function List({ passWord }) {
    let one = [];
    let two = [];
    studentdata.map((classdata) => {
        if (classdata.classlist == 'one') {
            classdata.students.filter((user) => (user.name.toLowerCase().includes(passWord.toLowerCase())) && one.push(<Row key={user.id} {...user} />));
        }
        else {
            classdata.students.filter((user) => (user.name.toLowerCase().includes(passWord.toLowerCase())) && two.push(<Row key={user.id} {...user} />));
        }
    });


    return (
        <tbody>
            <tr className="bg-white/5">
                <td className="p-5 text-sm md:text-xl" colSpan="4">Class One</td>
            </tr>

            {one}

            <tr className="bg-white/5">
                <td className="p-5 text-sm md:text-xl" colSpan="4">Class Two</td>
            </tr>

            {two}

        </tbody>
    );
}