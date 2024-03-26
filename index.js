// code your solution here

function superbowlWin(denverWinning){
    const result = denverWinning.find(denverWinning =>denverWinning.year=="2015")
    return !!result? result.year:undefined;

    
}
superbowlWin;

