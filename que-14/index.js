const proposal = ['resume', 'documents', 'form'];
// console.log(interview);
const candidate = requestInterview(proposal);
// console.log(candidate);
candidate.then(function (result) {
    console.log(result);
}).catch(err => console.log(err)

)

function selection() {
    return true;
}

function requestInterview(proposal) {
    const ps = new Promise(function (Accept, Reject) {
        if (selection()) {
            Accept("You Are Eligible For This Work")
        }
        else {
            const err = new Error("Sorry You Are Not Selected")
            Reject(err)
        }
        return err;

    })
    return ps;


}








