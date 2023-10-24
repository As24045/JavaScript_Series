<!DOCTYPE html>
<html lang="en">

<head>
    <title>Login</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="index.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body style="background-color: grey">
    <div class="container">
        <div class="alert alert-dismissible">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
            <h2 class="heading">Login Form</h2>
            
            <form class="form-horizontal" action="/action_page.php">
                <div class="form-group text-box">
                    <label class="control-label col-sm-3" for="email">Email ID:</label>
                    <div class="col-sm-9">
                        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
                    </div>
                </div>
                <div class="form-group text-box">
                    <label class="control-label col-sm-3" for="pwd">Password:</label>
                    <div class="col-sm-9">
                        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd" />
                    </div>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-success">Login</button>
                </div>
                <div>
                    <p class="register_link">Create A New Account Register <a href="">here</a></p>
                </div>
            </form>
        </div>
    </div>
</body>
<script>
    
    setTimeout(function() {
        //    let con = document.querySelector('.container')
           alert("hi")
        }, 3000);
        

</script>

</html>