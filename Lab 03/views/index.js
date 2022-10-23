<body>
    <section class="vh-100 gradient-custom-2">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-12 col-xl-10">
            <div class="card mask-custom">
              <div class="card-body p-4 text-white">
                <div class="text-center pt-3 pb-2">
                  <img
                    src="images/header.png"
                    alt="Check"
                    width="60"
                  />
                  <h2 class="my-4">Book List</h2>
                </div>
                <form action="/add-booklists" method="post" class="form-inline">
              
                   <input
                    class="form-control"
                    style="width: 80%"
                    type="text"
                    name="name"
                    placeholder="Book name..."
                  />
                  <img
                  src="images/bookName.png"
                  alt="avatar 1"
                  style="width: 40px; height: auto ; margin-left: 50px;"
                />
                  <input
                    class="form-control"
                    style="width: 80%"
                    type="text"
                    name="author"
                    placeholder="Author name ..."
                  />
               
                  <input
                  class="form-control"
                  style="width: 80%"
                  type="text"
                  name="genre"
                  placeholder="Genre name ..."
                />
            
                  <button
                    type="submit"
                    class="btn btn-warning mb-2"
                    style="margin-left: 20px"
                  >
                    Add Book
                  </button>
                </form>
         

                <table class="table text-white mb-0" style="color: black">
                  <thead>
                    <tr>
                      <th scope="col" >Book Name</th>
                      <th scope="col">Author Name</th>
                      <th scope="col">Genre</th>
                      <!-- <th scope="col">Priority</th> -->
                      
            
                    </tr>
                  </thead>
                  <tbody>
                    <% bookList.forEach((bookList)=>{ %>
                    <tr class="fw-normal">
                      <th>
                        <img
                          src="images/book.png"
                          alt="avatar 1"
                          style="width: 45px; height: auto"
                        />
                        <span class="ms-2" style="color: black;">  <%= bookList.name %></span>
                      </th>
                      <td class="align-middle">
        
                    
                            <span  style="color: black;">
                              <%= bookList.author %>
                            </span>
                         
                    
                      </td>
                      <!-- <td class="align-middle">
                        <h6 class="mb-0">
                          <span class="badge bg-danger">High priority</span>
                        </h6>
                      </td> -->
                      <td class="align-middle">
        
                    
                        <span  style="color: black;">
                          <%= bookList.genre %>
                        </span>
                     
                
                  </td>
                     
           
                    </tr>
                    <% }) %>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
</html>