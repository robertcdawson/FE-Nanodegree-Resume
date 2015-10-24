var bio = {
  "name": "Robert Dawson",
  "role": "Lead User Interface Developer",
  "contacts": {
    "mobile": "(925) 642-3504",
    "email": "manatees@gmail.com",
    "github": "robertcdawson",
    "twitter": "therobbiedshow",
    "blog": "therobbiedshow.com",
    "location": "San Francisco, CA"
  },
  "welcomeMessage": "As Lead User Interface Developer, I lead and supervise front-end development of the Federal Reserve Bank of San Francisco's public website, including project management, programming, testing, refactoring, and code documentation.",
  "skills": [
    "JavaScript",
    "jQuery",
    "PHP",
    "CSS",
    "AngularJS",
    "project management",
    "WordPress development"
  ],
  "bioPic": "https://static.squarespace.com/static/50063887e4b0830aa84ffdeb/t/52367f68e4b011d42ddb5b97/1379303273442/apple-touch-icon-114x114-precomposed.png"
};

var work = {
  "jobs": [{
      "employer": "Federal Reserve Bank of San Francisco",
      "title": "Lead User Interface Developer",
      "dates": "07/01/2012 - 10/17/2015",
      "location": "San Francisco, CA",
      "description": "As Lead User Interface Developer, I lead and supervise front-end development of the Federal Reserve Bank of San Francisco's public website, including project management, programming, testing, refactoring, and code documentation."
    },
    {
      "employer": "Federal Reserve Bank of San Francisco",
      "title": "Senior User Interface Developer",
      "dates": "09/03/2002 - 07/01/2012",
      "location": "San Francisco, CA",
      "description": "In this role, I led front-end development of the Federal Reserve Bank of San Francisco's public website, including cross-browser design, testing, refactoring, and code documentation."
    },
    {
      "employer": "al.com",
      "title": "Senior User Interface Developer",
      "dates": "06/01/2000 - 08/01/2002",
      "location": "Birmingham, AL",
      "description": "In this role, I maintained development of parisian.com, an online presence for large U.S. chain of upscale department stores."
    }
  ]
};

var projects = {
  "projects": [{
      "title": "FRBSF.org Rebrand",
      "dates": "05/01/2013 - 09/01/2015",
      "description": "Rebranded the Federal Reserve Bank of San Francisco's website to be more responsive, accessible, legible, and searchable.",
      "images": [
        "http://img.sur.ly/thumbnails/620x343/f/frbsf.org.png",
        "http://www.frbsf.org/files/photo5.jpg"
      ]
    }
  ]
};

var education = {
  "schools": [{
     "name": "California State University, East Bay",
     "location": "Hayward, CA",
     "degree": "MA",
     "majors": [
       "Multimedia"
     ],
     "dates": 2006,
     "url": "http://catalog.csueastbay.edu/preview_program.php?catoid=2&poid=612&returnto=97"
   },
   {
    "name": "Memphis College of Art",
    "location": "Memphis, TN",
    "degree": "BFA",
    "majors": [
      "Graphic Design"
    ],
    "dates": 1998,
    "url": "http://mca.edu/academics/undergraduate/graphic-design/"
   }
  ],
  "onlineCourses": [{
      "title": "MM 6100 - Tech I: Principles of Digital Multimedia",
      "school": "California State University, East Bay",
      "date": 2006,
      "url": "http://catalog.csueastbay.edu/preview_program.php?catoid=2&poid=612&returnto=97"
    }
  ]
};

bio.display = function() {

  // format bio info
  var formattedName = HTMLheaderName.replace('%data%', bio.name);
  var formattedRole = HTMLheaderRole.replace('%data%', bio.role);

  // format contact info
  var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
  var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
  var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
  var formattedBlog = HTMLblog.replace('%data%', bio.contacts.blog);
  var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
  var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

  // format skills
  var formattedSkills = "";
  for (var i = 0, len = bio.skills.length; i < len; i++) {
    formattedSkills += HTMLskills.replace('%data%', bio.skills[i]);
  }

  // insert bio info
  $('#header')
    .prepend(formattedRole)
    .prepend(formattedName);

  // insert contact info
  $('#topContacts, #footerContacts')
    .append(formattedMobile)
    .append(formattedTwitter)
    .append(formattedGithub)
    .append(formattedBlog)
    .append(formattedLocation);
  $('#header')
    .append(formattedBioPic)
    .append(formattedWelcomeMsg);

  // insert bio skills
  if ( bio.skills.length ) {
    $('#header').append(HTMLskillsStart);
    $('#skills').append(formattedSkills);
  }

};

bio.display();

// format and insert work
work.display = function() {

  for (var i = 0, len = work.jobs.length; i < len; i++) {

    $('#workExperience').append(HTMLworkStart);
    var formattedWorkEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
    var formattedWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
    var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
    var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
    var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
    $('.work-entry:last')
      .append(formattedWorkEmployer + formattedWorkTitle)
      .append(formattedWorkDates)
      .append(formattedWorkLocation)
      .append(formattedWorkDescription);

  }

};
work.display();

// insert and format projects
projects.display = function() {

  for (var i = 0, len = projects.projects.length; i < len; i++) {

    $('#projects').append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
    var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
    var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);

    var formattedProjectImage = "";
    for (var j = 0, len_proj = projects.projects[i].images.length; j < len_proj; j++) {
      formattedProjectImage += HTMLprojectImage.replace('%data%', projects.projects[i].images[j]);
    }

    $('.project-entry:last')
      .append(formattedProjectTitle)
      .append(formattedProjectDates)
      .append(formattedProjectDescription)
      .append(formattedProjectImage);

  }

};

projects.display();

// insert and format education
education.display = function() {

  for (var i = 0, len = education.schools.length; i < len; i++) {

    $('#education').append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[i].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
    var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);

    var formattedSchoolMajors = "";
    for (var j = 0, len_maj = education.schools[i].majors.length; j < len_maj; j++) {
      formattedSchoolMajors += HTMLschoolMajor.replace('%data%', education.schools[i].majors[j]);
    }

    $('.education-entry:last')
      .append(formattedSchoolName + formattedSchoolDegree)
      .append(formattedSchoolDates)
      .append(formattedSchoolLocation)
      .append(formattedSchoolMajors);

  }

  $('.education-entry:last').append(HTMLonlineClasses);

  for (var k = 0, len_oc = education.onlineCourses.length; k < len_oc; k++) {

    var FormattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[k].title);
    var FormattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[k].school);
    var FormattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[k].date);
    var FormattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[k].url);

    $('.education-entry:last')
      .append(FormattedOnlineTitle + FormattedOnlineSchool)
      .append(FormattedOnlineDates)
      .append(FormattedOnlineURL);

  }

};

education.display();

$('#mapDiv').append(googleMap);
