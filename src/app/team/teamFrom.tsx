'use client'
import React, {useState} from 'react';

interface Response {
    valid: boolean;

}
const TeamFrom = () => {
    const [newMember , setNewMember] = useState<string>('')
    const [members , setMembers ] = useState<string[]>([])
    const [teamCount , setTeamCount] = useState<number>(2)
    const [teams , setTeams] = useState<string[][]>([[]] as string[][])
    const [remainMembers , setRemainMembers] = useState<string[]>([])
    const checkValid = async (): Promise<Response> => {
            if (teamCount <= 0) {
                alert("팀 개수는 1개 이상이어야 합니다.");
                return { valid: false };
            }
            if (members.length < teamCount) {
                alert("팀 개수는 팀원 수보다 많을 수 없습니다.");
                return { valid: false };
            }
            if (teamCount === members.length) {
                alert("각 팀에 1명씩만 배정되는 경우는 피해주세요.");
                return { valid: false };
            }
        const nameSet = new Set(members);
        if (nameSet.size !== members.length) {
            alert("중복된 이름이 있습니다. 각 팀원의 이름은 고유해야 합니다.");
            return { valid: false };
        }
        return({ valid: true });
    };
    const handleRandomTeam = async (event: any) => {
        event.preventDefault();
        const res = await checkValid();
        if (!res.valid) {
            return;
        }
        const shuffledMembers = [...members].sort(() => Math.random() - 0.5);

        const baseTeamSize = Math.floor(members.length / teamCount);
        const extraMembers = members.length % teamCount;

        const teams: string[][] = Array.from({ length: teamCount }, () => []);

        shuffledMembers.forEach((member, index) => {
            const teamIndex = index % teamCount;
            if (teams[teamIndex].length < baseTeamSize || index < extraMembers * (baseTeamSize + 1)) {
                teams[teamIndex].push(member);
            }
        });
        const assignedMembers = teams.flat();
        const remainMembers = shuffledMembers.filter(member => !assignedMembers.includes(member));

        setTeams(teams);
        setRemainMembers(remainMembers);
    };


    return (
        <div className={'flex flex-col items-center space-y-5 select-none'}>
            <h1 className={'text-center text-16 md:text-3xl font-bold pt-10'}>랜덤 팀 나누기</h1>

            <form onSubmit={handleRandomTeam} className={'flex flex-col items-center space-x-2'}>
                <span className={'flex items-center space-x-1 text-[12px] md:text-[16px]'}>
                    <p>팀 수</p>
                    <input
                        value={teamCount}
                        min={2}
                        onChange={(event) => {
                                setTeamCount(Number(event.target.value))
                        }}
                        className={'text-black border rounded-md px-2 py-1.5 outline-none'} type="number"/>
                </span>
                <span className={'flex items-center space-x-1 text-[12px] md:text-[16px] pt-2'}>
                    <input id={'newMember'} value={newMember} onChange={(event) => {
                        setNewMember(event.target.value)
                    }} className={'text-black border rounded-md px-2 py-1.5 outline-none'} type="text" placeholder="Member Name" />

                    <button className={'border rounded-md px-2 py-1.5 hover:bg-gray-100 transition-colors'} onClick={(event) => {
                        event.preventDefault();
                        if(newMember){
                            if (!newMember.trim()) {
                                alert("이름을 입력해주세요.");
                                return;
                            }
                            if (members.includes(newMember)) {
                                alert("중복된 이름이 있습니다. 각 팀원의 이름은 고유해야 합니다.");
                                return;
                            }
                            setMembers([...members ,newMember ])
                            setNewMember('')
                        }
                    }}>추가</button>
                </span>


                <span className={'flex space-x-2 text-[12px] md:text-[16px] pt-2'}>
                    <button className={'border rounded-md px-2 py-1.5 hover:bg-gray-100 transition-colors'} type="submit">팀 나누기</button>
                    <button className={'border rounded-md px-2 py-1.5 hover:bg-gray-100 transition-colors'} onClick={(event) => {
                        event.preventDefault();
                        setTeams([[]])
                        setMembers([])
                        setRemainMembers([])
                        setTeamCount(2)
                    }}>초기화</button>
                </span>
            </form>
            <h2 className={'text-[12px] md:text-[16px]'}>맴버 현황 </h2>
            <p className={'text-[12px] md:text-[16px]'}>총 : {members.length}명</p>
            <div className={'grid grid-cols-3 grid-flow-row gap-2 text-[12px] md:text-[16px]'}>
                {members.map((member , index) => (
                        <p key={index}>{member}</p>
                ))}
            </div>

            <div className="grid grid-cols-3 gap-4 text-[12px] md:text-[16px]">
                {teams.length > 1 && teams.map((team, index) => (
                    <div key={index} className="flex flex-col items-center border px-4 py-2.5 rounded-xl">
                        <h2 className="font-bold">팀 {index + 1}</h2>
                        <div className="flex flex-col items-center gap-2">
                            {team.map((member, idx) => (
                                <p key={idx}>{member}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {remainMembers.length > 0 && (
                <div className={'flex flex-col items-center text-[12px] md:text-[16px]'}>
                    <h2>남은 맴버</h2>
                    <div className={'grid grid-cols-3 gap-2'}>
                        {remainMembers.map((member , index) => (
                            <p key={index}>{member}</p>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TeamFrom;