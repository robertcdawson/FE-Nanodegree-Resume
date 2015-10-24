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
  "jobs": [
    {
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
  "projects": [
    {
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
  "schools": [
    {
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
  "onlineCourses": [
    {
      "title": "MM 6100 - Tech I: Principles of Digital Multimedia",
      "school": "California State University, East Bay",
      "date": 2006,
      "url": "http://catalog.csueastbay.edu/preview_program.php?catoid=2&poid=612&returnto=97"
    }
  ]
};

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
for (var i = 0; i < bio.skills.length; i++) {
  formattedSkills += HTMLskills.replace('%data%', bio.skills[i]);
}

// insert bio info
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

// insert contact info
$('#topContacts, #footerContacts').append(formattedMobile);
$('#topContacts, #footerContacts').append(formattedTwitter);
$('#topContacts, #footerContacts').append(formattedGithub);
$('#topContacts, #footerContacts').append(formattedBlog);
$('#topContacts, #footerContacts').append(formattedLocation);
$('#header').append(formattedBioPic);
$('#header').append(formattedWelcomeMsg);

// insert bio skills
if ( bio.skills.length ) {
  $('#header').append(HTMLskillsStart);
  $('#skills').append(formattedSkills);
}

// format and insert work
work.display = function() {

  for (var job in work.jobs) {

    $('#workExperience').append(HTMLworkStart);
    var formattedWorkEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
    var formattedWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
    var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
    var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
    var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
    $('.work-entry:last').append(formattedWorkEmployer + formattedWorkTitle);
    $('.work-entry:last').append(formattedWorkDates);
    $('.work-entry:last').append(formattedWorkLocation);
    $('.work-entry:last').append(formattedWorkDescription);

  }

};
work.display();

// insert and format projects
projects.display = function() {

  for (var project in projects.projects) {

    $('#projects').append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
    var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
    var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);

    var formattedProjectImage = "";
    for (var i = 0; i < projects.projects[project].images.length; i++) {
      formattedProjectImage += HTMLprojectImage.replace('%data%', projects.projects[project].images[i]);
    }

    $('.project-entry:last').append(formattedProjectTitle);
    $('.project-entry:last').append(formattedProjectDates);
    $('.project-entry:last').append(formattedProjectDescription);
    $('.project-entry:last').append(formattedProjectImage);

  }

};

projects.display();

// insert and format education
education.display = function() {

  for (var school in education.schools) {

    $('#education').append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
    var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);

    var formattedSchoolMajors = "";
    for (var i = 0; i < education.schools[school].majors.length; i++) {
      formattedSchoolMajors += HTMLschoolMajor.replace('%data%', education.schools[school].majors[i]);
    }

    $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);
    $('.education-entry:last').append(formattedSchoolDates);
    $('.education-entry:last').append(formattedSchoolLocation);
    $('.education-entry:last').append(formattedSchoolMajors);

  }

  $('.education-entry:last').append(HTMLonlineClasses);

  for (var course in education.onlineCourses) {

    var FormattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
    var FormattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
    var FormattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].date);
    var FormattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url);

    $('.education-entry:last').append(FormattedOnlineTitle + FormattedOnlineSchool);
    $('.education-entry:last').append(FormattedOnlineDates);
    $('.education-entry:last').append(FormattedOnlineURL);

  }

};

education.display();

// $('#main').append(internationalizeButton);

$('#mapDiv').append(googleMap);
