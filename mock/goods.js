const data = [{ title: 'web全栈' }, { title: 'Vue' }];

export default {
  'get /api/goods': function(req, res) {
    setTimeout(() => {
      res.json({ result: data });
    }, 1000);
  },
};
