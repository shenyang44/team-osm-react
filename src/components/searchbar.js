import React, { useState } from "react";

const SearchForm = () => {
    const [search, setInput] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting search ${search}`)
    }
    return (
        <>
            {/* <form onSubmit={handleSubmit}>
                <label>
                    Search Input
            <input
                        type="text"
                        value={search}
                        onChange={e => setInput(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form> */}

            <nav id="navbar-example3" class="navbar navbar-dark bg-light">
                <a class="navbar-brand" href="#"></a>
                <nav class="nav nav-pills flex-column">
                    <a class="nav-link" href="#item-1">Hospital</a>
                    {/* <nav class="nav nav-pills flex-column">
                        <a class="nav-link ml-3 my-1" href="#item-1-1">Item 1-1</a>
                        <a class="nav-link ml-3 my-1" href="#item-1-2">Item</a>
                    </nav> */}
                    <a class="nav-link" href="#item-2">Clinic</a>
                    <a class="nav-link" href="#item-3">Blood Bank</a>
                    {/* <a class="nav-link" href="#item-4">Hospital 2</a>
                    <a class="nav-link" href="#item-5">Clinic 2</a>
                    <a class="nav-link" href="#item-6">Blood Bank 2</a>
                    <a class="nav-link" href="#item-7">Hospital 3</a>
                    <a class="nav-link" href="#item-8">Clinic 3</a>
                    <a class="nav-link" href="#item-9">Blood Bank 3</a>
                    <a class="nav-link" href="#item-10">Blood Bank 4</a> */}

                </nav>
            </nav>

            <a data-spy="scroll" data-target="#navbar-example3" data-offset="0">
                <h4 id="item-1">Hospital</h4>
                <p>Event name :</p>
                <p>Description :</p>
                <p>Location :</p>
                <p>Time :</p>
                <p>Date :</p>
                <p>Establishment:</p>
                <h4 id="item-2">Clinic</h4>
                <p>Event name :</p>
                <p>Description :</p>
                <p>Location :</p>
                <p>Time :</p>
                <p>Date :</p>
                <p>Establishment:</p>
                <h4 id="item-3">Blood Bank</h4>
                <p>Event name :</p>
                <p>Description :</p>
                <p>Location :</p>
                <p>Time :</p>
                <p>Date :</p>
                <p>Establishment:</p>
                {/* <h4 id="item-4">Hospital 2</h4>
                <p>```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````</p>
                <h4 id="item-5">Clinic 2</h4>
                <p>```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````</p>
                <h4 id="item-6">Blood Bank 2</h4>
                <p>```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````</p>
                <h4 id="item-7">Hospital 3</h4>
                <p>```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````</p>
                <h4 id="item-8">Clinic 3</h4>
                <p>```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````</p>
                <h4 id="item-9">Blood Bank 3</h4>
                <p>```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````</p>
                <h4 id="item-10">Blood Bank 4</h4>
                <p>```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````</p> */}
            </a>
        </>
    );
};
export default SearchForm;








// import $ from "jquery";

// const SearchBar = () => {

//     $(document).ready(function () {
//         $("#tableSearch").on("keyup", function () {
//             var value = $(this).val().toLowerCase();
//             $("#myTable tr").filter(function () {
//                 $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//             });
//         });
//     });

//     return (
//         <>
//             <div class="container">
//                 <input class="form-control mb-4" id="tableSearch" type="text"
//                     placeholder="Type something to search list items">

//                     <table class="table table-bordered table-striped">
//                         <thead>
//                             <tr>
//                                 <th>Firstname</th>
//                                 <th>Lastname</th>
//                                 <th>Email</th>
//                             </tr>
//                         </thead>
//                         <tbody id="myTable">
//                             <tr>
//                                 <td>John</td>
//                                 <td>Doe</td>
//                                 <td>john@example.com</td>
//                             </tr>
//                             <tr>
//                                 <td>Mary</td>
//                                 <td>Moe</td>
//                                 <td>mary@mail.com</td>
//                             </tr>
//                             <tr>
//                                 <td>July</td>
//                                 <td>Dooley</td>
//                                 <td>july@greatstuff.com</td>
//                             </tr>
//                             <tr>
//                                 <td>Anja</td>
//                                 <td>Ravendale</td>
//                                 <td>a_r@test.com</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </input>
//             </div>
//         </>
//     );
// };
