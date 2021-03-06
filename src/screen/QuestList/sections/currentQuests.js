import React, { useEffect, useState } from "react";
import {useDispatch} from 'react-redux'
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";
import { 
  Moudal,
  AvailableQuestCard,
} from '../../../component'

import axios from '../../../utils/axios'

import Progress from "./progress";

import { AnimatedCircularProgress } from "react-native-circular-progress";
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    marginTop: 20,
    backgroundColor: "#E5E5E5",
    flexDirection: "column",
  },
  progress: {
    marginBottom: 9,
    marginTop: 24,
    justifyContent: "space-around",
    flexDirection: "row",
  },
  progressItem: {
    flexDirection: "column",
    justifyContent: "center",
  },
  progressTitle: {
    fontWeight: "bold",
    textAlign: "center",
  },
  progressValue: {
    textAlign: "center",
    marginTop: 6,
  },
  availableQuests: {
    flexGrow: 1,
  },
  currentQuestsCard: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    padding: 14,
    width: 138,
    height: 135,
    marginHorizontal: 4,
  },
  currentQuestsCardContainer: {
    marginTop: 17,
    flexDirection: "row",
  },
  questTitle: {
    fontWeight: "bold",
    fontSize: 15,
    height: 40,
    marginBottom: 7,
  },
  lvExpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 7,
  },
  levelText: {
    fontSize: 12,
    color: "#808080",
    fontWeight: "bold",
    marginEnd: 3,
  },
  levelValue: {
    fontSize: 15,
    fontWeight: "bold",
  },
  currentQuestButton: {
    backgroundColor: "#FFF",
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#C5C7C7",
    marginTop: 10,
    paddingVertical: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  currentQuestButtonText: {
    color: "#C5C7C7",
    fontSize: 12,
  },
  currentQuests: {
    marginTop: 18,
  },
});

export default function CurrentQuest() {
  
  const dispatch = useDispatch()
  const [questsLoading, setQuestsLoading] = useState(true)
  const [modalShow, setModalShow] = useState(false)
  const [content, setContent] = useState([])
  const [selectedContent, setSelectedContent] = useState({})

  useEffect(() => {
      refreshData()
  },[])
    
  const refreshData = () => {
    setQuestsLoading(true)
    dispatch({type:'userStats',loadingCurrent:true})
    axios.get('mission/active')
      .then((res) => {
        let data = res.data
        console.log(data)
        setContent(data.data)
        dispatch({type:'userStats',current:data.data.length, loadingCurrent: false})
        setQuestsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const Card = ({ item }) => {
    let press = () => {
      setSelectedContent(item); setModalShow(true)
    }

      return (
        <TouchableOpacity style={styles.currentQuestsCard} onPress={press}>
        <Text style={styles.questTitle}>{item.name}</Text>
        <View style={styles.lvExpContainer}>
          <View style={{ flexDirection: "row", alignItems: "baseline" }}>
            <Text style={styles.levelText}>LV</Text>
            <Text style={styles.levelValue}>{item.level}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "baseline" }}>
            <Text style={styles.levelText}>EXP</Text>
            <Text style={styles.levelValue}>{item.poin}</Text>
          </View>
        </View>
        <Pressable style={styles.currentQuestButton}>
          <Text style={styles.currentQuestButtonText}>Not Finished</Text>
        </Pressable>
      </TouchableOpacity>
      )
  }

  return (
    <View style={styles.currentQuests}>
      <Text>CURRENT QUESTS</Text>
      {questsLoading? 
        /* loading */
        <SkeletonPlaceholder backgroundColor="#BDBDBD" highlightColor="#D8D8D8">
            <ScrollView style={styles.currentQuestsCardContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
                {[1,2,3,4,5,6].map(x => <SkeletonPlaceholder.Item key={x} width={138} height={135} borderRadius={18} marginHorizontal={4} />)}
            </ScrollView>
        </SkeletonPlaceholder>
        /* if loading is done */
        :<ScrollView style={styles.currentQuestsCardContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
          <FlatList 
                data={content}
                renderItem={Card}
                keyExtractor={data => data.id}
                horizontal={true}
            />
          </ScrollView>
        }
        <Moudal content={selectedContent} refreshData={refreshData} showButton={true} buttonTitle="Quest Done" visible={modalShow} closeModal={() => {setModalShow(false)}}/>
    </View>
  );
}
