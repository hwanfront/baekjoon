function solution(record) {
  const answer = [];
  const recordList = record.map((e) => {
    const item = e.split(" ");
    return {
      type: item[0],
      id: item[1],
      name: item[2],
    };
  });
  const userList = new Map();

  recordList.forEach((e) => {
    if (!userList.get(e.id)) {
      userList.set(e.id, e.name);
    }

    if (e.type !== "Leave") {
      userList.set(e.id, e.name);
    }

    if (e.type !== "Change") {
      answer.push(e);
    }
  });

  return answer.map((e) => {
    const nowName = userList.get(e.id);
    if (e.type === "Enter") {
      return `${nowName}님이 들어왔습니다.`;
    }
    return `${nowName}님이 나갔습니다.`;
  });
}
