// KiddoLearn - E-Learning Platform JavaScript

const courses = [
    {
        id: 1,
        title: "🐶 Animal Friends",
        description: "Learn about cute animals from around the world! Discover lions, elephants, penguins, and many more amazing creatures.",
        category: "animals",
        image: "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=400",
        rating: 5,
        lessons: 8,
        duration: "20 min",
        progress: 60,
        videoEmbedUrl: "https://www.youtube.com/embed/hY7m5jjJ9mM?rel=0",
        lessonsList: [
            { title: "Safari Adventure", duration: "3 min", completed: true },
            { title: "Ocean Friends", duration: "3 min", completed: true },
            { title: "Farm Animals", duration: "3 min", completed: true },
            { title: "Jungle Animals", duration: "3 min", completed: false },
            { title: "Birds of Paradise", duration: "3 min", completed: false },
            { title: "Under the Sea", duration: "3 min", completed: false },
            { title: "Arctic Animals", duration: "3 min", completed: false },
            { title: "Pet Animals", duration: "3 min", completed: false }
        ]
    },
    {
        id: 2,
        title: "🔤 Learn ABCs",
        description: "Fun songs and animations to learn all the letters from A to Z! Perfect for beginners.",
        category: "abc",
        image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400",
        rating: 5,
        lessons: 10,
        duration: "25 min",
        progress: 30,
        videoEmbedUrl: "https://www.youtube.com/embed/U88CH3-k1nI?rel=0",
        lessonsList: [
            { title: "Letters A, B, C", duration: "3 min", completed: true },
            { title: "Letters D, E, F", duration: "3 min", completed: true },
            { title: "Letters G, H, I", duration: "3 min", completed: true },
            { title: "Letters J, K, L", duration: "3 min", completed: false },
            { title: "Letters M, N, O", duration: "3 min", completed: false },
            { title: "Letters P, Q, R", duration: "3 min", completed: false },
            { title: "Letters S, T, U", duration: "3 min", completed: false },
            { title: "Letters V, W, X", duration: "3 min", completed: false },
            { title: "Letters Y, Z", duration: "3 min", completed: false },
            { title: "ABC Song", duration: "3 min", completed: false }
        ]
    },
    {
        id: 3,
        title: "🔢 Counting 1-20",
        description: "Count along with fun animations and catchy songs! Learn numbers from 1 to 20.",
        category: "numbers",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400",
        rating: 4,
        lessons: 12,
        duration: "30 min",
        progress: 0,
        videoEmbedUrl: "https://www.youtube.com/embed/K4TOrB7at0Y?rel=0",
        lessonsList: [
            { title: "Numbers 1-5", duration: "3 min", completed: false },
            { title: "Numbers 6-10", duration: "3 min", completed: false },
            { title: "Numbers 11-15", duration: "3 min", completed: false },
            { title: "Numbers 16-20", duration: "3 min", completed: false },
            { title: "Counting Objects", duration: "3 min", completed: false },
            { title: "Fun with Numbers", duration: "3 min", completed: false }
        ]
    },
    {
        id: 4,
        title: "🎨 Rainbow Colors",
        description: "Learn all the beautiful colors of the rainbow with fun animations!",
        category: "colors",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
        rating: 5,
        lessons: 7,
        duration: "18 min",
        progress: 100,
        videoEmbedUrl: "https://www.youtube.com/embed/S-sd-2PLxqU?rel=0",
        lessonsList: [
            { title: "Red and Orange", duration: "3 min", completed: true },
            { title: "Yellow and Green", duration: "3 min", completed: true },
            { title: "Blue and Purple", duration: "3 min", completed: true },
            { title: "Pink and Brown", duration: "3 min", completed: true },
            { title: "Black and White", duration: "3 min", completed: true },
            { title: "Rainbow Song", duration: "3 min", completed: true }
        ]
    },
    {
        id: 5,
        title: "🔷 Shape Explorer",
        description: "Discover circles, squares, triangles, and more! Find shapes everywhere!",
        category: "shapes",
        image: "https://images.unsplash.com/photo-1558618047-f4f8dd79a179?w=400",
        rating: 4,
        lessons: 8,
        duration: "20 min",
        progress: 45,
        videoEmbedUrl: "https://www.youtube.com/embed/oxaWq7fN4xM?rel=0",
        lessonsList: [
            { title: "Circle and Oval", duration: "3 min", completed: true },
            { title: "Square and Rectangle", duration: "3 min", completed: true },
            { title: "Triangle", duration: "3 min", completed: true },
            { title: "Star and Heart", duration: "3 min", completed: false },
            { title: "Diamond and Hexagon", duration: "3 min", completed: false },
            { title: "Shape Hunt", duration: "3 min", completed: false }
        ]
    },
    {
        id: 6,
        title: "🎵 Fun Songs",
        description: "Sing and dance along with the best nursery rhymes and learning songs!",
        category: "songs",
        image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400",
        rating: 5,
        lessons: 10,
        duration: "25 min",
        progress: 75,
        videoEmbedUrl: "https://www.youtube.com/embed/jNQXAC9IVRw?rel=0",
        lessonsList: [
            { title: "Twinkle Twinkle", duration: "3 min", completed: true },
            { title: "Old MacDonald", duration: "3 min", completed: true },
            { title: "Wheels on the Bus", duration: "3 min", completed: true },
            { title: "Mary Had a Little Lamb", duration: "3 min", completed: true },
            { title: "Itsy Bitsy Spider", duration: "3 min", completed: false },
            { title: "Row Row Row Your Boat", duration: "3 min", completed: false }
        ]
    }
];

// User Progress Data (stored in localStorage)
let userProgress = {
    totalStars: 12,
    totalBadges: 3,
    coursesCompleted: 2,
    streak: 5,
    earnedBadges: ['🌟', '📚', '🎯'],
    weeklyActivity: [45, 60, 30, 75, 50, 80, 40]
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadProgress();
    initializePage();
});

// Load progress from localStorage
function loadProgress() {
    const saved = localStorage.getItem('kiddoLearnProgress');
    if (saved) {
        userProgress = JSON.parse(saved);
    }
    updateProgressDisplay();
}

// Save progress to localStorage
function saveProgress() {
    localStorage.setItem('kiddoLearnProgress', JSON.stringify(userProgress));
    updateProgressDisplay();
}

// Update progress display on home page
function updateProgressDisplay() {
    const totalStars = document.getElementById('totalStars');
    const totalBadges = document.getElementById('totalBadges');
    const coursesCompleted = document.getElementById('coursesCompleted');
    const streak = document.getElementById('streak');
    
    if (totalStars) totalStars.textContent = userProgress.totalStars;
    if (totalBadges) totalBadges.textContent = userProgress.totalBadges;
    if (coursesCompleted) coursesCompleted.textContent = userProgress.coursesCompleted;
    if (streak) streak.textContent = userProgress.streak;
}

// Initialize based on current page
function initializePage() {
    const path = window.location.pathname;
    
    if (path.includes('courses.html')) {
        initCoursesPage();
    } else if (path.includes('course-detail.html')) {
        initCourseDetailPage();
    } else if (path.includes('progress.html')) {
        initProgressPage();
    }
}

// Courses Page
function initCoursesPage() {
    renderCourses(courses);
    setupFilters();
    setupSearch();
}

function renderCourses(courseList) {
    const grid = document.getElementById('coursesGrid');
    if (!grid) return;
    
    grid.innerHTML = courseList.map(course => `
        <div class="course-card" onclick="window.location.href='course-detail.html?id=${course.id}'">
            <div class="course-image">
                <span class="category-badge ${course.category}">${getCategoryIcon(course.category)} ${getCategoryName(course.category)}</span>
                <img src="${course.image}" alt="${course.title}">
            </div>
            <div class="course-info">
                <h3>${course.title}</h3>
                <p>${course.description.substring(0, 60)}...</p>
                <div class="course-meta">
                    <div class="stars">${'⭐'.repeat(course.rating)}</div>
                    <span class="lessons">${course.lessons} Lessons</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${course.progress}%"></div>
                </div>
                <span class="progress-text">${course.progress}% Complete</span>
            </div>
        </div>
    `).join('');
}

function getCategoryIcon(category) {
    const icons = {
        animals: '🐾',
        abc: '🔤',
        numbers: '🔢',
        colors: '🎨',
        shapes: '🔷',
        songs: '🎵'
    };
    return icons[category] || '📚';
}

function getCategoryName(category) {
    const names = {
        animals: 'Animals',
        abc: 'ABCs',
        numbers: 'Numbers',
        colors: 'Colors',
        shapes: 'Shapes',
        songs: 'Songs'
    };
    return names[category] || 'General';
}

function setupFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            buttons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.category;
            if (category === 'all') {
                renderCourses(courses);
            } else {
                const filtered = courses.filter(c => c.category === category);
                renderCourses(filtered);
            }
        });
    });
}

function setupSearch() {
    const searchInput = document.querySelector('.search-box input');
    const searchBtn = document.querySelector('.search-box button');
    
    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') performSearch();
        });
    }
}

function performSearch() {
    const searchInput = document.querySelector('.search-box input');
    const query = searchInput.value.toLowerCase();
    
    const filtered = courses.filter(course => 
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query)
    );
    
    renderCourses(filtered);
}

// Course Detail Page
function initCourseDetailPage() {
    const params = new URLSearchParams(window.location.search);
    const courseId = parseInt(params.get('id'));
    const course = courses.find(c => c.id === courseId);
    
    if (!course) {
        window.location.href = 'courses.html';
        return;
    }
    
    renderCourseDetail(course);
}

function renderCourseDetail(course) {
    // Video Player - Using YouTube thumbnail and link for local compatibility
    const videoContainer = document.querySelector('.video-wrapper');
    if (videoContainer) {
        const videoId = course.videoEmbedUrl.split('/embed/')[1].split('?')[0];
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;
        const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
        videoContainer.innerHTML = `
            <div class="video-placeholder">
                <img src="${thumbnailUrl}" alt="${course.title} thumbnail" class="video-thumbnail">
                <a href="${watchUrl}" target="_blank" class="watch-video-btn">▶️ Watch Video on YouTube</a>
            </div>
        `;
    }
    
    // Video Info
    const videoInfo = document.querySelector('.video-info');
    if (videoInfo) {
        videoInfo.innerHTML = `
            <h1>${course.title}</h1>
            <p>${course.description}</p>
            <div class="course-meta">
                <div class="stars">${'⭐'.repeat(course.rating)}</div>
                <span class="lessons">${course.lessons} Lessons • ${course.duration}</span>
            </div>
            <button class="btn btn-complete" onclick="markLessonComplete()">✅ Mark as Complete!</button>
            <div class="lesson-nav">
                <button class="btn-prev" onclick="prevLesson()">⬅️ Previous</button>
                <button class="btn-next" onclick="nextLesson()">Next ➡️</button>
            </div>
        `;
    }
    
    // Lesson List
    const lessonList = document.querySelector('.lesson-list');
    if (lessonList) {
        lessonList.innerHTML = course.lessonsList.map((lesson, index) => `
            <li class="lesson-item ${lesson.completed ? 'completed' : ''}" onclick="playLesson(${index})">
                <span class="lesson-number">${index + 1}</span>
                <span class="lesson-title">${lesson.title}</span>
                ${lesson.completed ? '<span class="lesson-check">✓</span>' : ''}
            </li>
        `).join('');
    }
}

let currentLessonIndex = 0;

function playLesson(index) {
    currentLessonIndex = index;
    const params = new URLSearchParams(window.location.search);
    const courseId = parseInt(params.get('id'));
    const course = courses.find(c => c.id === courseId);

    // Update video - Using YouTube thumbnail and link for local compatibility
    const videoContainer = document.querySelector('.video-wrapper');
    if (videoContainer && course) {
        const videoId = course.videoEmbedUrl.split('/embed/')[1].split('?')[0];
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;
        const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
        videoContainer.innerHTML = `
            <div class="video-placeholder">
                <img src="${thumbnailUrl}" alt="${course.lessonsList[index].title} thumbnail" class="video-thumbnail">
                <a href="${watchUrl}" target="_blank" class="watch-video-btn">▶️ Watch Video on YouTube</a>
            </div>
        `;
    }

    // Update active lesson in list
    const lessonItems = document.querySelectorAll('.lesson-item');
    lessonItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

function markLessonComplete() {
    const params = new URLSearchParams(window.location.search);
    const courseId = parseInt(params.get('id'));
    const course = courses.find(c => c.id === courseId);
    
    if (course && !course.lessonsList[currentLessonIndex].completed) {
        course.lessonsList[currentLessonIndex].completed = true;
        course.progress = Math.round((course.lessonsList.filter(l => l.completed).length / course.lessonsList.length) * 100);
        
        // Award stars
        userProgress.totalStars += 1;
        
        // Check if course completed
        if (course.progress === 100 && !course.completed) {
            course.completed = true;
            userProgress.coursesCompleted += 1;
            userProgress.totalBadges += 1;
            userProgress.earnedBadges.push('🏆');
            alert('🎉 Congratulations! You completed the course and earned a new badge! 🏆');
        }
        
        saveProgress();
        renderCourseDetail(course);
    }
}

function prevLesson() {
    if (currentLessonIndex > 0) {
        playLesson(currentLessonIndex - 1);
    }
}

function nextLesson() {
    const params = new URLSearchParams(window.location.search);
    const courseId = parseInt(params.get('id'));
    const course = courses.find(c => c.id === courseId);
    
    if (course && currentLessonIndex < course.lessonsList.length - 1) {
        playLesson(currentLessonIndex + 1);
    }
}

// Progress Page
function initProgressPage() {
    renderProgressPage();
}

function renderProgressPage() {
    // Overall Progress Circle
    const progressCircle = document.querySelector('.circular-progress .progress');
    if (progressCircle) {
        const circumference = 2 * Math.PI * 60;
        const progress = 65; // Overall progress percentage
        const offset = circumference - (progress / 100) * circumference;
        progressCircle.style.strokeDasharray = circumference;
        progressCircle.style.strokeDashoffset = offset;
    }
    
    // Stars Display
    const starsContainer = document.querySelector('.stars-display');
    if (starsContainer) {
        let starsHTML = '';
        for (let i = 0; i < 15; i++) {
            const earned = i < userProgress.totalStars;
            starsHTML += `<div class="star-item ${earned ? 'earned' : ''}">⭐</div>`;
        }
        starsContainer.innerHTML = starsHTML;
    }
    
    // Update star count display
    const starCountEl = document.getElementById('starCount');
    if (starCountEl) {
        starCountEl.textContent = userProgress.totalStars;
    }
    
    // Badges Grid
    const badgesGrid = document.querySelector('.badges-grid');
    if (badgesGrid) {
        const allBadges = [
            { icon: '🌟', name: 'First Star', earned: true },
            { icon: '📚', name: 'Bookworm', earned: true },
            { icon: '🎯', name: 'Quick Learner', earned: true },
            { icon: '🏆', name: 'Champion', earned: userProgress.totalBadges >= 4 },
            { icon: '🔥', name: 'On Fire', earned: userProgress.streak >= 7 },
            { icon: '🎨', name: 'Artist', earned: false }
        ];
        
        badgesGrid.innerHTML = allBadges.map(badge => `
            <div class="badge-item ${badge.earned ? 'earned' : ''}">
                <div class="badge-icon">${badge.icon}</div>
                <div class="badge-name">${badge.name}</div>
            </div>
        `).join('');
    }
    
    // Activity Chart
    const activityChart = document.querySelector('.activity-chart');
    if (activityChart) {
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        const maxHeight = 120;
        const maxValue = Math.max(...userProgress.weeklyActivity);
        
        activityChart.innerHTML = userProgress.weeklyActivity.map((value, index) => {
            const height = (value / maxValue) * maxHeight;
            return `
                <div class="chart-bar" style="height: ${height}px">
                    <span class="chart-label">${days[index]}</span>
                </div>
            `;
        }).join('');
    }
    
    // Streak
    const streakNumber = document.querySelector('.streak-number');
    if (streakNumber) {
        streakNumber.textContent = userProgress.streak;
    }
}

// Export for use in other pages
window.courses = courses;
window.userProgress = userProgress;
window.saveProgress = saveProgress;
window.getCategoryIcon = getCategoryIcon;
window.getCategoryName = getCategoryName;
window.playLesson = playLesson;
window.markLessonComplete = markLessonComplete;
window.prevLesson = prevLesson;
window.nextLesson = nextLesson;
