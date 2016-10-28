// $('#search-box').keyup ->
//   searchText = $('#search-box').val()
//   showResults(searchText)
      
   
// showResults = (searchText) ->
//   $('thumbnail').hide()
//   $('thumbnail:Contains(' + searchText + ')').show()
    

// ## Override the Contains function to be case insensitive   
// jQuery.expr[":"].Contains = jQuery.expr.createPseudo((arg) ->
//   (elem) ->
//     jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0
// )

// $('#search-box').keyup ->
//   searchText = $('#search-box').val()
//   showResults(searchText)
      
   
// showResults = (searchText) ->
//   $('tbody tr').hide()
//   $('tbody tr:Contains(' + searchText + ')').show()
    

// ## Override the Contains function to be case insensitive   
// jQuery.expr[":"].Contains = jQuery.expr.createPseudo((arg) ->
//   (elem) ->
//     jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0
// )