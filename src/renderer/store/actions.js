import fs from 'fs'
import electron from 'electron'

// maybe move these functions to a separate class at some point
function parseHostEntry (entry) {
  // check to see if it's a comment
  if (entry.trim()[0] === '#') {
    return {ip: '', domains: [], comment: entry}
  }
  var data = entry.trim().match(/\S+/g)

  if (data) {
    return {
      ip: data[0],
      domains: data.slice(1),
      comment: undefined
    }
  } else {
    return undefined
  }
}
function parseHosts (hosts) {
  var entries = []
  var entry = {}
  hosts.split('\n').forEach((element) => {
    entry = parseHostEntry(element)
    if (entry) {
      entries.push(entry)
    }
  })

  return entries
}
function hostsString (hosts) {
  var data = ''
  console.log('################### \n hosts: ')
  console.log(hosts)
  for (var i = 0; i < hosts.length; i++) {
    console.log(hosts[i])
    if (hosts[i].comment) {
      data += hosts[i].comment + '\n'
    } else {
      data += hosts[i].ip + ' '
      if (hosts[i].domains) {
        for (var j = 0; j < hosts[i].domains.length; j++) {
          data += hosts[i].domains[j] + ' '
        }
      }
      data += '\n'
    }
  }

  return data
}

export default {
  getHosts ({ commit }) {
    fs.readFile('/etc/hosts', (err, data) => {
      // console.log('err: ' + err)
      // console.log('data: ' + data)
      if (err) { throw err }

      var entries = parseHosts(data.toString())

      console.log('entries: ' + entries)
      commit('setHosts', entries)
    })
  },
  getPreviouslyUsedHosts ({ commit }) {
    // app.getPath('appData', (err, data) => {
    //   if (err) { throw err }
    //   var filePath = data
    //   console.log('filePath: ' + filePath)
    //   commit('setPreviouslyUsedHosts', filePath)
    // })
    var path = electron.remote.app.getPath('appData') + '/previouslyUsedHosts.json'
    console.log('path: ' + path)
    if (fs.existsSync(path)) {
      fs.readFile(path, (err, data) => {
        if (err) { throw err }
        console.log(data.toString())
        commit('setPreviouslyUsedHosts', data.toString())
      })
    } else {
      var testData = [{ip: '127.0.0.1', domains: ['test.com']}]
      fs.writeFile(path, JSON.stringify(testData), (err) => {
        if (err) { throw err }
        commit('setPreviouslyUsedHosts', testData)
      })
    }
  },
  saveHosts ({commit}, hosts) {
    var data = hostsString(hosts)

    fs.writeFile('/etc/hosts', data, (err) => {
      if (err) { throw err }
    })
  }
}
