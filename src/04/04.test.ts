test('should take people older then 90', () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];
    const oldAges = ages.filter(age => age > 90);
    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
});

test('should take courses cheaper then 160', () => {
    const courses = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 200},
        {title: 'React', price: 150}
    ];
    const cheapCourses = courses.filter(course => course.price < 160);
    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0].price).toBe(110);
    expect(cheapCourses[1].price).toBe(150);
});

test('get only completed tasks', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Solt', isDone: false},
        {id: 4, title: 'Shugar', isDone: true}
    ];
    const completedTasks = tasks.filter(task => task.isDone);
    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].title).toBe('Milk')
    expect(completedTasks[1].title).toBe('Shugar')
});
