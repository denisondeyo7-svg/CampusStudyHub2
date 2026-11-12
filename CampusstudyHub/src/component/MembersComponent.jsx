

function MembersComponent() {
    const Members = [
        { number: "1", name: "1290Den", email: "1290den@gmail.com", year: "2", course: "Information Technology" },
        { number: "2", name: "Den", email: "lilden@gmail.com", year: "1", course: "Information Technology" },
        { number: "3", name: "Dayvon", email: "Dayvon@gmail.com", year: "2", course: "Computer Science" },
        { number: "4", name: "Kingsley", email: "Kingsley@gmail.com", year: "2", course: "Information Technology" },
        { number: "5", name: "Wilington", email: "Wilington@gmail.com", year: "2", course: "Computer science" },
        { number: "6", name: "VonHot", email: "von@gmail.com", year: "3", course: "Information Technology" },
        { number: "7", name: "Ahmed", email: "ahmed@gmail.com", year: "4", course: "Computer science" },
        { number: "8", name: "Lil50", email: "L50y@gmail.com", year: "1", course: "Information Technology" },
        { number: "9", name: "YoungTh", email: "WilYoungThington@gmail.com", year: "2", course: "Computer science" },
        { number: "10", name: "Brevo", email: "Brevo@gmail.com", year: "2", course: "Computer science" },
        { number: "11", name: "Kasongo", email: "Kasongo@gmail.com", year: "4", course: "Computer science" },
        { number: "12", name: "Brevo", email: "Brevo@gmail.com", year: "2", course: "Computer science" },
        { number: "13", name: "Kasongo", email: "Kasongo@gmail.com", year: "4", course: "Computer science" }

    ]
    return (
        <div>
            <table>
                <thead>
                    <th>#</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Year</th>
                    <th>Course</th>
                    <th>ACTION</th>
                </thead>

                <tbody>
                    {Members.map((member) => (
                        <tr>
                            <td>{member.number}</td>
                            <td>{member.name}</td>
                            <td>{member.email}</td>
                            <td>{member.year}</td>
                            <td>{member.course}</td>
                            <td><a href="" id="delete" title="Delete">Delete</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MembersComponent;