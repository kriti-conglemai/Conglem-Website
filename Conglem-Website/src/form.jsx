import react from "react"
function Form(){
    return <div class="row justify-content-center mt-5">
    <div>
      <div class="card shadow">
        <div class="card-title text-center border-bottom">
          <h2 class="p-1">Ask a question?</h2>
        </div>
        <div class="card-body">
          <form>
            <div class="mb-3">
              <label for="username" class="form-label">Full Name</label>
              <input type="text" class="form-control" id="username" />
            </div>
            <div class="mb-4">
              <label for="password" class="form-label">Email</label>
              <input type="password" class="form-control" id="password" />
            </div>
            <div class="mb-4" >
              <label for="password" class="form-label">Comment</label>
              <input type="text" class="form-control p-5" id="comment" />
            </div>
            
            <div class="d-grid">
            <button type ="submit"class="btn btn-primary btn-lg">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
}
export default Form;