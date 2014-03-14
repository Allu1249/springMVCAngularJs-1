
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags" %>
<%@ taglib  prefix="form" uri="http://www.springframework.org/tags/form"%>
<html>
<head>
<script src="/springMVCAngularJs/js/jquery/jquery-2.1.0.js" type="text/javascript"></script>
<script src="/springMVCAngularJs/js/jquery/jquery-2.1.0.min.js" type="text/javascript"></script>
<script src="/springMVCAngularJs/js/person.js" type="text/javascript"></script>

</script>

</head>

<body>
    Hello this is person ${controllerMessage}

        <br>${checkListValues}
        <br>Person ${person}


        <c:forEach   items ="${checkListValues}"  var="course" >
        <p>    <c:out value="${course}"/><p>
        </c:forEach>
        <p> From start <p>
        <input type="button" name="Add More" value="Add More" id="addMore"/>
        <div id="PersonWrapper">
                <div id="PersonDetails" class="">
                       <div>FirstName:<span id="FirstName##$##"> ${person.firstName}</span></div>

                       <div>LastName: <span id="LastName##$##">${person.lastName}</span></div>
                </div>
        </div>


</body>
</html>




